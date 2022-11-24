import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { PasswordPipe } from './pipes/password.pipe';

import { registerLocaleData } from '@angular/common';

import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';

registerLocaleData(localEs);
registerLocaleData(localFr);

@NgModule({
  imports: [BrowserModule, FormsModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es',
    },
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    PasswordPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
