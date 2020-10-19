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
                script{
                    def namespace = "default"
                        withCredentials([file(credentialsId: 'devsecops-gcr-credentials', variable: 'KUBECONFIG')]) {

                          // change context with related namespace
                          echo '$(kubectl config current-context)'
                        }
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
