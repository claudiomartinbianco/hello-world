pipeline {
    
    agent { label 'kubepod' }
    
    stages {
        stage("Checkout code") {
            steps {
                git url:'https://github.com/claudiomartinbianco/hello-world.git'
            }
        }
        
        stage('Deploy to GKE') {
            steps{
                script {
                    kubernetesDeploy(configs: "deployment.yaml", kubeconfigId: "mykubeconfig")
                }
            }
        }
    }    
}
