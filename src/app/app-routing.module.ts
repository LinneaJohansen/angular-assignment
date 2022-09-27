import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { CataloguePage } from "./pages/catalogue/catalogue.page";
import { LoginPage } from "./pages/login/login.page";
import { TrainerPage } from "./pages/trainer/trainer.page";

//Routes the user depending on AuthGuard and if they're logged in
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
        component: TrainerPage,
        canActivate: [ AuthGuard ]
    },
    {
        path: "catalogue",
        component: CataloguePage,
        canActivate: [ AuthGuard ]
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