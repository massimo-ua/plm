import { action, payload } from 'ts-action';

import { ILogin } from '../core';

const Login = action('Login', payload<ILogin>());