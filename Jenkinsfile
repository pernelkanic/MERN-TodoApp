pipeline {
  agent any
  stages {
    stage('checkout code') {
      steps {
        git(url: 'https://github.com/pernelkanic/MERN-TodoApp', branch: 'main')
      }
    }

    stage('dir switch') {
      steps {
        bat 'cd Frontend'
      }
    }

    stage('npm install') {
      steps {
        sh 'npm i '
      }
    }

  }
}