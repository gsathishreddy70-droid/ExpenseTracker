FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /app

COPY . .

ENV MAVEN_OPTS="-Xmx384m -XX:+UseG1GC"

RUN if [ -f "./expensetracker/pom.xml" ]; then \
        cd expensetracker && mvn clean package -DskipTests && cp target/*.jar /app/app.jar; \
    else \
        mvn clean package -DskipTests && cp target/*.jar /app/app.jar; \
    fi

FROM eclipse-temurin:21-jre
WORKDIR /app

COPY --from=build /app/app.jar app.jar

EXPOSE 8081

ENTRYPOINT ["java", "-XX:MaxRAMPercentage=75.0", "-jar", "app.jar"]
