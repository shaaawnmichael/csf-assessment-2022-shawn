package ibf2021.assessment.csf.server.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ibf2021.assessment.csf.server.models.Recipe;
import ibf2021.assessment.csf.server.services.RecipeService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping(path="/api", produces=MediaType.APPLICATION_JSON_VALUE)
public class RecipesRestController {

    @Autowired
    private RecipeService recipesvc;

    @GetMapping(path="/recipes")
    public ResponseEntity<List<Recipe>> getAllRecipes(){
        List<Recipe> allRecipes = recipesvc.getAllRecipes();
        return ResponseEntity.ok(allRecipes);
    }

}

