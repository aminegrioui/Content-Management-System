package com.springBoot.Mini_Cms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springBoot.Mini_Cms.model.ArtikelModel;
import com.springBoot.Mini_Cms.repository.ArtikelRepository;

@Service
public class ArtikelService {
	@Autowired
    private ArtikelRepository repository;
    
	public List<ArtikelModel> getAllArtikel(){
		
		return repository.findAll();
	}
	public ArtikelModel saveArtikel(ArtikelModel artikel) {
		return repository.save(artikel);
	}
	public List<ArtikelModel> searchForCategorie(String categorie){
		return repository.search(categorie);
	}
	public String deleteArticle(int id) {
		repository.deleteById(id);
		return "deleted";
	}
	
	public ArtikelModel getArtikleById(int id) {
		return repository.findById(id).get();
	}
	public ArtikelModel updateArtikleById(int id,ArtikelModel artikle ) {
		ArtikelModel artikleModel=getArtikleById(id);
		artikleModel.setArtiklsname(artikle.getArtiklsname());
		artikleModel.setAutorname(artikle.getAutorname());
		artikleModel.setCategorie(artikle.getCategorie());
		artikleModel.setContent(artikle.getContent());
		return saveArtikel(artikleModel);
	}
}
