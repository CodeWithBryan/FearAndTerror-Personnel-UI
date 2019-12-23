import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { RouterModule } from '@angular/router';
import { NavigationItemModule } from '../../components/navigation-item/navigation-item.module';
import { ContainerModule } from '../../directives/container/container.module';
import { ToolbarSearchModule } from 'src/@vex/components/toolbar-search/toolbar-search.module';
import { MatInputModule } from '@angular/material';


@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatRippleModule,
    MatMenuModule,
    MatIconModule,
    IconModule,
    RouterModule,
    NavigationItemModule,
    ContainerModule,
    ToolbarSearchModule,
    MatInputModule,
  ],
  exports: [NavigationComponent]
})
export class NavigationModule {
}
