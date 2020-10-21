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

                sh '/root/google-cloud-sdk/bin/gcloud container clusters get-credentials kbe-nonprod --zone us-east4-b --project logics-2-0-nonprod'                    
                    

                // sh 'kubectl config set-context $(kubectl config current-context) --namespace=default'
    

                // sh '/usr/local/gcloud/google-cloud-sdk/bin/gcloud auth activate-service-account --key-file $JSON_KEY'
                    
                // sh '/usr/local/gcloud/google-cloud-sdk/bin/gcloud app deploy app.yaml'
                    
                //sh '/usr/local/gcloud/google-cloud-sdk/bin/gcloud app deploy deployment.yaml'
    
                // sh '/usr/local/gcloud/google-cloud-sdk/bin/gcloud beta run deploy bee-cd --image gcr.io/logics-2-0-nonprod/sklearn-iris:0.1 --allow-unauthenticated --platform managed --region us-east1'

                // sh 'gcloud auth activate-service-account --key-file $JSON_KEY'

                // sh '/usr/local/gcloud/google-cloud-sdk/bin/gcloud beta run deploy --image=gcr.io/logics-2-0-nonprod/sklearn-iris:0.1'

    
                // sh '/usr/local/gcloud/google-cloud-sdk/bin/gcloud beta run deploy bee-cd --image gcr.io/logics-2-0-nonprod/sklearn-iris:0.1 --allow-unauthenticated --platform managed --region us-east1 --quiet'

                // sh 'echo "${JSON_KEY}"'
    
                //Deploy with Helm
                // sh 'helm upgrade --install road-dashboard -f myweb.yaml --set tag=$TAG --namespace default'
    

            }                
                
                
            }
        }          
      
        
        stage('Deploy App') {
          steps {
            script {
              kubernetesDeploy(configs: 'myweb.yaml', kubeconfigId: 'meukube', enableConfigSubstitution: true)
            }
          }
        }        
        
    } 
}
