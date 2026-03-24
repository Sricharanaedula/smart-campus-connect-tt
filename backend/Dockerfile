# Stage 1: build
FROM maven:3.10.3-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn -B clean package -DskipTests

# Stage 2: run
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
# copy built jar from build stage; includes version suffix
COPY --from=build /app/target/*.jar app.jar

# runtime env defaults; override in Render settings
ENV SPRING_PROFILES_ACTIVE=prod
ENV SERVER_PORT=8081

EXPOSE 8081
ENTRYPOINT ["java", "-jar", "app.jar"]
