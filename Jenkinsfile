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
      agent any
      environment {
        Docker_user = 'venkatakrishnanraghavan'
        Docker_pwd = 'venkat051203'
      }
      steps {
        bat 'docker login -u venkatakrishnanraghavan -p venkat051203'
      }
    }

    stage('build image') {
      steps {
        dir(path: 'Frontend') {
          bat 'docker build -t venkatakrishnanraghavan/front-todo .'
        }

      }
    }

    stage('push') {
      steps {
        bat 'docker push venkatakrishnanraghavan/front-todo:latest'
      }
    }

  }
}