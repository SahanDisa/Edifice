package com.example.edifice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.edifice.models.Project;


public interface ProjectRepository extends JpaRepository<Project, Long> {
	List<Project> findByPublished(boolean published);
	
	List<Project> findByTitleContaining(String title);
}
