pipeline {
    agent { Labe 'kubepod' }
    stages {
        stage("Checkout code") {
            steps {
                git url:'https://github.com/claudiomartinbianco/hello-world.git'
            }
        }
        stage("Build image") {
            steps {
                script {
                    myapp = docker.build("claudiombianco/hello-world:${env.BUILD_ID}")
                }
            }
        }
        stage("Push image") {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub_id') {
                            myapp.push("latest")
                            myapp.push("${env.BUILD_ID}")
                    }
                }
            }
        }        
        stage('Deploy to GKE') {
            steps{
                script {
                    kubernetesDeploy(configs: "deployment.yaml", kubeconfigId: "meukube")
                }
            }
        }
    }    
}
