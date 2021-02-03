package com.springBoot.Mini_Cms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.springBoot.Mini_Cms.model.ArtikelModel;

public interface ArtikelRepository extends JpaRepository<ArtikelModel,Integer>{
    
	@Query("SELECT a FROM ArtikelModel a WHERE a.categorie =?1")
	public List<ArtikelModel> search(String categorie);
}
