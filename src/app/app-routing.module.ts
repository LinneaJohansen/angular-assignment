import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CataloguePage } from "./pages/catalogue/catalogue.page";
import { LoginPage } from "./pages/login/login.page";
import { TrainerPage } from "./pages/trainer/trainer.page";

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/login"
    },
    {
        path: "login",
        component: LoginPage
    },
    {
        path: "trainer",
        component: TrainerPage
    },
    {
        path: "catalogue",
        component: CataloguePage
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ], //Imports a module
    exports: [
        RouterModule
    ] //Expose modules and features
})
export class AppRoutingModule{

}