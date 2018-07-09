package pe.edu.cibertec.hermez.api.config;

import com.fasterxml.classmate.ResolvedType;
import com.fasterxml.classmate.TypeResolver;
import com.fasterxml.classmate.types.ResolvedObjectType;
import com.google.common.base.Predicates;
import com.google.common.collect.Sets;
import io.swagger.annotations.ApiModel;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import pe.edu.cibertec.hermez.api.jwt.JWTAuthenticationRequest;
import pe.edu.cibertec.hermez.api.jwt.JWTAuthenticationResponse;
import springfox.documentation.builders.*;
import springfox.documentation.schema.ModelRef;
import springfox.documentation.service.*;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.schema.ModelBuilderPlugin;
import springfox.documentation.spi.schema.contexts.ModelContext;
import springfox.documentation.spi.service.ApiListingScannerPlugin;
import springfox.documentation.spi.service.contexts.DocumentationContext;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.spring.web.readers.operation.CachingOperationNameGenerator;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.*;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

    @Bean
    public Docket customImplementation() {

        return new Docket(DocumentationType.SWAGGER_2)
                .useDefaultResponseMessages(false)
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(Predicates.not(PathSelectors.regex("/error.*")))
                .build()
                .apiInfo(addInfo())
                .protocols(addProtocols())
                .securitySchemes(addSecuritySchemes())
                .securityContexts(addSecurityContexts())
                .tags(addTags()[0], addTags())
                .additionalModels(addModels()[0], addModels());
    }

    private ApiInfo addInfo() {
        return new ApiInfoBuilder()
                .title("Swagger Hermez")
                .description("Hermez REST API based on Spring Boot with MySQL, Spring Fox (Swagger API docs) and JWT.")
                .version("0.0.1-SNAPSHOT")
                .contact(new Contact("Josue Mapelli", "", "kxel@outlook.com"))
                .build();
    }

    private Set<String> addProtocols() {
        Set<String> protocols = new HashSet<>();
        protocols.add("http");
        return protocols;
    }

    private Tag[] addTags() {
        return new Tag[]{
                new Tag("login-controller", "Login Controller", 0)
        };
    }

    private ResolvedType[] addModels() {
        TypeResolver typeResolver = new TypeResolver();

        return new ResolvedType[]{
                typeResolver.resolve(JWTAuthenticationRequest.class),
                typeResolver.resolve(JWTAuthenticationResponse.class)
        };
    }

    private List<? extends SecurityScheme> addSecuritySchemes() {
        return Arrays.asList(
                new ApiKey("Authorization", "Authorization", "header"));
    }

    private List<SecurityContext> addSecurityContexts() {
        return Arrays.asList(
                SecurityContext
                        .builder()
                        .forPaths(PathSelectors.any())
                        .securityReferences(addSecurityReferences())
                        .build());
    }

    private List<SecurityReference> addSecurityReferences() {
        return Arrays.asList(
                SecurityReference
                        .builder()
                        .reference("Authorization")
                        .scopes(new AuthorizationScope[0])
                        .build());
    }

    @Bean
    public ApiListingScannerPlugin apiListingScannerPlugin() {
        return new ApiListingScannerPlugin() {

            @Override
            public List<ApiDescription> apply(DocumentationContext context) {
                return new ArrayList<ApiDescription>(
                        Arrays.asList(
                                new ApiDescription(
                                        "/login",
                                        "login controller",
                                        Arrays.asList(
                                                new OperationBuilder(new CachingOperationNameGenerator())
                                                        .authorizations(new ArrayList())
                                                        .summary("signIn")
                                                        .tags(Sets.newHashSet("login-controller"))
                                                        .codegenMethodNameStem("Login Controller")
                                                        .method(HttpMethod.POST)
                                                        .parameters(
                                                                Arrays.asList(
                                                                        new ParameterBuilder()
                                                                                .name("credentials")
                                                                                .description("credentials")
                                                                                .parameterType("body")
                                                                                .parameterAccess("access")
                                                                                .required(true)
                                                                                .modelRef(new ModelRef("Login"))
                                                                                .build()
                                                                )
                                                        )
                                                        .responseMessages(Sets.newHashSet(new ResponseMessage(200, "OK", new ModelRef("Token"), new HashMap<>(), new ArrayList<>())))
                                                        .build()
                                        ),
                                        false
                                )
                        )
                );
            }

            @Override
            public boolean supports(DocumentationType delimiter) {
                return DocumentationType.SWAGGER_2.equals(delimiter);
            }
        };
    }

}
