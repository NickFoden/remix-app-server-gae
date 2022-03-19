Create project in google cloud, enable billing, enable cloud build api, then use the glcoud command line to login and select your project

- gcloud auth login
- gcloud config set project remix-app-server-gae
- add `app.yaml` for standard environment
- add a `gcp-build` script

- assume port will be default to env (and it is!)

- gcloud app deploy
  answer question about selecting a region from command line
- wait for success :-) or go view errors in cloud build
