from locust import HttpUser, task

class WebsiteUser(HttpUser):

    @task
    def hello_world(self):
        self.client.get("/")
