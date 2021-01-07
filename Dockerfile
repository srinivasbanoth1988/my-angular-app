FROM java:8
ADD target/my-angular-app-1.0-SNAPSHOT.jar my-angular-app-1.0-SNAPSHOT.jar
EXPOSE 8090
ENTRYPOINT ["java","-jar", "my-angular-app-1.0-SNAPSHOT.jar"]
