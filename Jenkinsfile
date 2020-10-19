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

                
        withCredentials([[$class: 'FileBinding', credentialsId: 'mygcp', variable: 'GOOGLE_APPLICATION_CREDENTIALS']]) {
          sh 'echo "${GOOGLE_APPLICATION_CREDENTIALS}"' // returns ****
          sh 'gcloud auth activate-service-account --key-file $GOOGLE_APPLICATION_CREDENTIALS'
          sh './deploy.sh'
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
