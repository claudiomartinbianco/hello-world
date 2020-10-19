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

        withCredentials([[$class: 'FileBinding', credentialsId: 'mysecret', variable: 'GOOGLE_APPLICATION_CREDENTIALS']]) {
          sh 'echo "${GOOGLE_APPLICATION_CREDENTIALS}"' // returns ****                
            
                    sh """
                    curl -Lo /usr/local/bin/kubectl https://storage.googleapis.com/kubernetes-release/release/v1.4.6/bin/linux/amd64/kubectl
                    chmod a+x /usr/local/bin/kubectl
                    """
            
            sh 'echo $(kubectl config current-context) --namespace=default'
            
          // sh 'gcloud auth activate-service-account --key-file $GOOGLE_APPLICATION_CREDENTIALS'
          // sh './deploy.sh'
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
