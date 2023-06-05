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

    stage('list') {
      steps {
        bat 'dir'
      }
    }

    stage('switch') {
      steps {
        dir(path: 'Frontend') {
          bat 'npm install '
        }

      }
    }

    stage('docker login') {
      environment {
        Docker_user = 'venkatakrishnanraghavan'
        Docker_pwd = 'venkat051203'
      }
      steps {
        powershell 'docker login -u $Docker_user -p $Docker_pwd '
      }
    }

  }
}