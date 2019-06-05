import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';

const routes:Routes = [
    {
        path : "",
        redirectTo : "page1",
        pathMatch : "full"
    },
    {
        path : "page1",
        component : Page1Component,
        pathMatch : "full"
    },
    {
        path : "page2",
        component : Page2Component,
        pathMatch : "full"
    },
    {
        path : "page3",
        component : Page3Component,
        pathMatch : "full"
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [RouterModule],
})
export class ProfileRoutingModule {}