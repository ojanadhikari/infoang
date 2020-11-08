package com.infodev.fpro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.infodev.fpro.repository.DataRepository;
import com.infodev.fpro.model.Data;
@RestController
public class DataController {

	@Autowired
	DataRepository dataRepository;
	
	@RequestMapping (value="/data", method = RequestMethod.GET)
	public  List<Data>getAllData()
	{
		return dataRepository.findAll();
	
	}
	
	@RequestMapping (value="/data/{id}", method = RequestMethod.GET)
	public Data getData(@PathVariable("id") int id) 
	{
		return dataRepository.findById((long) id).get();
	}
	
	@RequestMapping (value="/data", method = RequestMethod.POST)
	public Data createData(Data data)
	{
		return dataRepository.save(data);
	}
	
	@RequestMapping (value="/data", method = RequestMethod.PUT)
	public Data updateData(Data data)
	{
		return dataRepository.save(data);
	}
	
	@RequestMapping (value="/data/{id}", method = RequestMethod.DELETE)
	
	public void deleteData(@PathVariable("id") int id)
	{
		dataRepository.deleteById((long) id);
	}
	
}
