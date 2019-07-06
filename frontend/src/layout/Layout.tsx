import React from 'react';

import { Auth } from '../auth';
import {
    Footer,
    Navbar,
} from './components';
export const Layout: React.FC = () => (
    <div className="App">
        <div><Navbar /><Auth /></div>
        <div>Main</div>
        <Footer />
    </div>
);
