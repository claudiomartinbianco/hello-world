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
    
    
                sh """
                curl -Lo /tmp/helm.tar.gz https://kubernetes-helm.storage.googleapis.com/helm-v2.1.3-linux-amd64.tar.gz
                tar -zxvf /tmp/helm.tar.gz -C /tmp
                mv /tmp/linux-amd64/helm /usr/local/bin/helm
                chmod +x /usr/local/bin/helm
                """

                // Install Kubectl
                sh """
                curl -Lo /usr/local/bin/kubectl https://storage.googleapis.com/kubernetes-release/release/v1.4.6/bin/linux/amd64/kubectl
                chmod a+x /usr/local/bin/kubectl
                """                 
    
                //Install the google SDK
                sh """
                curl -Lo /tmp/google-cloud-sdk.tar.gz https://dl.google.com/dl/cloudsdk/release/google-cloud-sdk.tar.gz
                mkdir -p /usr/local/gcloud
                tar -C /usr/local/gcloud -xvf /tmp/google-cloud-sdk.tar.gz
                /usr/local/gcloud/google-cloud-sdk/install.sh
                """
    
                // sh 'kubectl config set-context $(kubectl config current-context) --namespace=default'
    

                sh '/usr/local/gcloud/google-cloud-sdk/bin/gcloud auth activate-service-account --key-file $JSON_KEY'
    
    sh '/usr/local/gcloud/google-cloud-sdk/bin/gcloud beta run deploy bee-cd --image gcr.io/logics-2-0-nonprod/sklearn-iris:0.1 --allow-unauthenticated --platform managed --region us-east1 --quiet'

    // sh 'echo "${JSON_KEY}"'
    
                //Deploy with Helm
                // sh 'helm upgrade --install road-dashboard -f myweb.yaml --set tag=$TAG --namespace default'
    
    // sh 'echo "${your_variable}" | base64 -d | tee /root/.kube/config'
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
