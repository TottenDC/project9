import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import Gallery from './Gallery';

const Nav = ({data, loading, switchLoading, onClick}) => {
    return (
        <nav class="main-nav">
            <ul>
                <li><NavLink to="/gallery/ocean">Ocean</NavLink></li>
                <li><NavLink to="/gallery/storm">Storm</NavLink></li>
                <li><NavLink to="/gallery/moonlight">Moonlight</NavLink></li>
            </ul>

            <Route 
                path="/gallery/ocean" 
                render={ () => 
                    <Gallery 
                        onClick={onClick}
                        switchLoading={switchLoading} 
                        data={data} 
                        loading={loading}
                        query={"ocean"} 
                    /> 
                } 
            />
            <Route 
                path="/gallery/storm" 
                render={ () => 
                    <Gallery 
                        onClick={onClick} 
                        switchLoading={switchLoading} 
                        data={data} 
                        loading={loading} 
                        query={"storm"} 
                    /> 
                } 
            />
            <Route 
                path="/gallery/moonlight" 
                render={ () => 
                    <Gallery 
                        onClick={onClick} 
                        switchLoading={switchLoading} 
                        data={data} 
                        loading={loading} 
                        query={"moonlight"} 
                    /> 
                } 
            />
        </nav>
    );
};

export default Nav;