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

            withCredentials([file(credentialsId: 'mysecret', variable: 'KUBECONFIG')]) {

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
                
              // change context with related namespace
              sh 'kubectl config set-context $(kubectl config current-context) --namespace=default'

              //Deploy with Helm
              echo "Deploying"
              sh 'helm upgrade --install road-dashboard -f values.${ENV}.yaml --set tag=$TAG --namespace default'
            }                
                              
                
                
            }
        }        
        
        stage('Deploy App') {
          steps {
            script {
              kubernetesDeploy(configs: 'myweb.yaml', kubeconfigId: 'mykubeconfig', enableConfigSubstitution: true)
            }
          }
        }        
        
    } 
}
