pipeline {
    agent any

    tools {
        nodejs 'node'
    }


    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Environment Setup') {
            steps {
                script {
                    echo "Initializing environment..."
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Lint & Test') {
            steps {
                // Update this if tests are fixed, currently CRA default tests may fail
                sh 'npm test -- --watchAll=false'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'npm run build'
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed.'
            cleanWs()
        }
        success {
            echo 'Build and Deployment Succeeded!'
        }
        failure {
            echo 'Build Failed. Please check the logs.'
        }
    }
}
