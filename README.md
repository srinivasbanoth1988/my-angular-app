# My Angular Application

### Instructions to Build & Run:

### Build Steps 

 Steps to run the application from IDE:
1. Clone the GIT Repository
2. Import project into any IDE like Intellij using pom.xml
3. Run App from Intellij Configuration straight away
4. (Or) Go to MyAngularApp File -> Right Click -> Run
5. Application by default runs on port 8090
6. Login Page URL :  http://localhost:8090/
  
## Docker hub image run command

docker run -p 8090:8090 srinivasnayak8/my-angular-app

## Google Cloud k8s Deployment Steps



1. Create K8s Cluster from google cloud UI.
	* Kubernetes Engine > Clusters > Create Cluster
	* Enter name ex: docker-k8s-my-angular-app
	* Click on "Create" 
  * This process takes few minutes.
2. Once Cluster is created follow below steps to upload
	* Select cluster and click on "connect" button
	* "Connect to the cluster" popup will apprer
	* Clikc on "Run in cloud shell" button
	* Cloud shell termincal will appear.
	* below similar command(sample) will appear by default
	
	* gcloud container clusters get-credentials cluster-1 --zone us-central1-c --project reflec
	ted-coder-300911
	* Hit Enter 
	* Process will fetch clustor endpoint and auth data
	* Once above step is completed, upload docker-k8s-my-angular-app.yaml file
	* Once file is uploaded, excute commad from terminal (kubectl apply -f docker-k8s-my-angular-app.yaml)
	* once above step is finished, expose the app and add loadbalancer(external ip).
	
3. Delete the cluster once testing is completed to avoid charges.



