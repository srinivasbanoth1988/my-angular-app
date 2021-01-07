FROM java:8
ADD target/my-angular-app-0.0.1-SNAPSHOT.jar my-angular-app-0.0.1-SNAPSHOT.jar
EXPOSE 8090
ENTRYPOINT ["java","-jar", "my-angular-app-0.0.1-SNAPSHOT.jar"]
