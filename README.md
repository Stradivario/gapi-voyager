# @Gapi Voyager Module

##### Original Voyager module you can find here [VoyagerGraphql](https://github.com/APIs-guru/graphql-voyager)
##### For questions/issues you can write ticket [here](http://gitlab.youvolio.com/gapi/gapi-voyager/issues)
##### This module is intended to be used with [GAPI](https://github.com/Stradivario/gapi)

## Installation and basic examples:
##### To install this Gapi module, run:

```bash
$ npm install @gapi/voyager --save
```

## Consuming @gapi/voyager

Without configuration

##### Import inside AppModule or CoreModule
```typescript

import { GapiModule } from '@gapi/core';
import { GapiVoyagerModule } from '@gapi/voyager';

@GapiModule({
    imports: [
        GapiVoyagerModule
    ]
})
export class CoreModule { }
```

With configuration

##### Import inside AppModule or CoreModule
```typescript

import { GapiModule } from '@gapi/core';
import { GapiVoyagerModule } from '@gapi/voyager';

@GapiModule({
    imports: [
        GapiVoyagerModule.forRoot({
            path: '/voyager';
            endpointUrl: '/graphql';
        })
    ]
})
export class CoreModule { }
```

TODO: Better documentation...

Enjoy ! :)
