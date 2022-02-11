package ibf2021.assessment.csf.server.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ibf2021.assessment.csf.server.models.Recipe;
import ibf2021.assessment.csf.server.services.RecipeService;

@RestController
@RequestMapping(path="/api", produces=MediaType.APPLICATION_JSON_VALUE)
public class RecipeRestController {

    @Autowired
    private RecipeService recipesvc;

    @GetMapping(path="/recipe/{recipe_id}")
    public ResponseEntity<Optional<Recipe>> getRecipebyId(@PathVariable String recipe_id){
        Optional<Recipe> Recipe = recipesvc.getRecipeById(recipe_id);
        return ResponseEntity.ok(Recipe);
    }


}
