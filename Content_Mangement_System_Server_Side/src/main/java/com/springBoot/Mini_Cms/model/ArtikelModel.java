package com.springBoot.Mini_Cms.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ArtikelModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String artiklsname;
	private String autorname;
	private String content;
	private String categorie;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getArtiklsname() {
		return artiklsname;
	}
	public void setArtiklsname(String artiklsname) {
		this.artiklsname = artiklsname;
	}
	public String getAutorname() {
		return autorname;
	}
	public void setAutorname(String autorname) {
		this.autorname = autorname;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getCategorie() {
		return categorie;
	}
	public void setCategorie(String categorie) {
		this.categorie = categorie;
	}
	
 
}
