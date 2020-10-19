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
                withCredentials([file(credentialsId: 'gcr:devsecops-gcr-credentials', variable: 'KUBECONFIG')]) {

                  // change context with related namespace
                  sh "kubectl config set-context $(kubectl config current-context)"
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
