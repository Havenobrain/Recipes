import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoryList from './components/CategoryList';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';

const App = () => {
    return (
        <Router>
            <div>
            <Routes>
                <Route exact path="/" element={<CategoryList />} />
                <Route exact path="/recipes" element={<RecipeList />} />
                <Route path="/category/:categoryId" element={<RecipeList />} />
                <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
            </Routes>
            </div>
        </Router>
    );
};

export default App;