package com.springBoot.Mini_Cms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springBoot.Mini_Cms.model.ArtikelModel;
import com.springBoot.Mini_Cms.service.ArtikelService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")
public class ArtikelController {
     
	@Autowired
	private ArtikelService service;
	
	@GetMapping("/")
	public List<ArtikelModel> getAllArtikels(){
		return service.getAllArtikel();
	}
	@PostMapping("/")
	public ArtikelModel saveArtikel(@RequestBody ArtikelModel artikelModel) {
		return service.saveArtikel(artikelModel);
	}
	@GetMapping("/{categorie}")
	public List<ArtikelModel> searcheForCategorie(@PathVariable String categorie){
		return service.searchForCategorie(categorie);
	}
	
	@DeleteMapping("/{id}")
	public String deleteArtikle(@PathVariable int id) {
		return service.deleteArticle(id);
	}
	@GetMapping("/getArtikle/{id}")
	public ArtikelModel getArtikleById(@PathVariable int id) {
		return service.getArtikleById(id);
	}
	@PutMapping("/{id}")
	public ArtikelModel updateArtikle(@PathVariable int id, @RequestBody ArtikelModel artikle) {
		return service.updateArtikleById(id, artikle);
	}
	
}
