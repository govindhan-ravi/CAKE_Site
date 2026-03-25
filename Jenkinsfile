pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "sp-cakes-delight"
        DOCKER_TAG = "latest"
        // Uncomment and set if using a registry
        // REGISTRY_CREDENTIALS_ID = 'docker-hub-credentials'
        // REGISTRY_NAME = 'your-docker-username'
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

        stage('Docker Build') {
            steps {
                script {
                    dockerImage = docker.build("${env.DOCKER_IMAGE}:${env.DOCKER_TAG}")
                }
            }
        }

        // stage('Docker Push') {
        //     steps {
        //         script {
        //             docker.withRegistry('', 'docker-hub-credentials') {
        //                 dockerImage.push("${env.DOCKER_TAG}")
        //                 dockerImage.push("latest")
        //             }
        //         }
        //     }
        // }

        stage('Deploy (Optional)') {
            steps {
                echo 'Deploying to staging/production server...'
                // Example: sh 'docker-compose up -d'
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
