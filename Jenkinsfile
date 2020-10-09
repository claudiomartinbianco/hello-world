pipeline {
    
    agent any
    
    environment {
        PROJECT_ID = 'logics-2-0-nonprod'
        CLUSTER_NAME = 'kbe-nonprod'
        LOCATION = 'us-east4'
        CREDENTIALS_ID = 'devsecops-gcr-credentials'
    }    
    
    stages {
        stage("Checkout code") {
            steps {
                git url:'https://github.com/claudiomartinbianco/hello-world.git'
            }
        }        
        
        stage('Deploy to GKE') {
            steps{
                sh "sed -i 's/hello-world:latest/hello-world:${env.BUILD_ID}/g' myweb.yaml"
                step([$class: 'KubernetesEngineBuilder', projectId: env.PROJECT_ID, clusterName: env.CLUSTER_NAME, location: env.LOCATION, manifestPattern: 'myweb.yaml', credentialsId: env.CREDENTIALS_ID, verifyDeployments: true])
            }
        }        
        
        stage('Deploy App') {
          steps {
            script {
              kubernetesDeploy(configs: 'myweb.yaml', kubeconfigId: 'devsecops-gcr-credentials', enableConfigSubstitution: true)
            }
          }
        }
        
    } 
}
