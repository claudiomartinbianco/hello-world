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
                    
                    
                    withKubeCredentials([credentialsId: 'devsecops-gcr-credentials', contextName: 'default']) {
                      sh 'kubectl config view'
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
