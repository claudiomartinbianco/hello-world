pipeline {
    
    agent any
    
    stages {
        stage("Checkout code") {
            steps {
                git url:'https://github.com/claudiomartinbianco/hello-world.git'
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
