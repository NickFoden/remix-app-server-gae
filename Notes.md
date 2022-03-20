Create [project in google cloud](https://cloud.google.com/resource-manager/docs/creating-managing-projects), [enable billing](https://cloud.google.com/billing/docs/how-to/modify-project), enable [cloud build api](https://cloud.google.com/apis/docs/getting-started#enabling_apis), then use the [glcoud command line](https://cloud.google.com/sdk/docs/install)

- log in `gcloud auth login`
- set your project if not already set `gcloud config set project my-project-name`
- add the `app.yaml` file for standard environment (standard can scale to 0)
- add a `gcp-build` script to package file
- do the deploy - `gcloud app deploy` and answer question about selecting a region from command line
- wait for success :-) or if errors then can go view in cloud build
  - (if billing is not enabled you may see gcr image not available in logs)
