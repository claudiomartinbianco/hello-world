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

            sh 'echo "$(KUBECONFIG)"' // returns ****
          // change context with related namespace
          sh 'kubectl config set-context $(kubectl config current-context) --namespace=${namespace}'

          //Deploy with Helm
          echo 'Deploying'
          sh 'helm upgrade --install road-dashboard -f values.${ENV}.yaml --set tag=$TAG --namespace ${namespace}'
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
