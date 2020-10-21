pipeline {
    
    agent any    
    
    stages {
        
        stage("Checkout code") {
            steps {
                git url:'https://github.com/claudiomartinbianco/hello-world.git'
            }
        }        
                     
        
        stage("Config") {
            steps {         
                              
                
                withCredentials([[$class: 'FileBinding', credentialsId: 'mysecret', variable: 'JSON_KEY']]) {
    
    
                    sh '/root/google-cloud-sdk/bin/gcloud auth activate-service-account --key-file $JSON_KEY'

                    sh '/root/google-cloud-sdk/bin/gcloud container clusters get-credentials kbe-nonprod --zone us-east4 --project logics-2-0-nonprod'                    

                    sh '/root/google-cloud-sdk/bin/kubectl create deployment cmb --image=gcr.io/logics-2-0-nonprod/hello-world:latest'

                    sh '/var/jenkins_home/google-cloud-sdk/bin/kubectl create -f deployment.yaml'
    

                }
                
            }
        }  
      
               
        
    } 
}
