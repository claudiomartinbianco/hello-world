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
                           
                    
                    withCredentials([[$class: 'FileBinding', credentialsId: 'devsecops-gcr-credentials', variable: 'JSON_KEY']]) {
                      sh 'gcloud auth activate-service-account --key-file $JSON_KEY'
                      sh 'make yourstuff'
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
