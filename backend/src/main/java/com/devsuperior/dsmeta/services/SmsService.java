package com.devsuperior.dsmeta.services;

import java.text.DecimalFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.repositories.SaleRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Service
public class SmsService {
	
	@Value("${twilio.sid}")
	private String twilioSid;

	@Value("${twilio.key}")
	private String twilioKey;

	@Value("${twilio.phone.from}")
	private String twilioPhoneFrom;

	@Value("${twilio.phone.to}")
	private String twilioPhoneTo;
	
	@Autowired
	private SaleRepository saleRepository;

	public void sendSms(Long saleId) {
		
		Sale sale = saleRepository.findById(saleId).get();
		StringBuilder mensagem = new StringBuilder();
		mensagem.append("Olá " + sale.getSellerName() + ", ");
		mensagem.append("sua venda #" + sale.getId() + " foi concluída. ");
		mensagem.append("Valor total: R$ " + sale.getAmount().toString());

		Twilio.init(twilioSid, twilioKey);

		PhoneNumber to = new PhoneNumber(twilioPhoneTo);
		PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

		System.out.println(mensagem.toString());
		
		Message message = Message.creator(to, from, mensagem.toString()).create();
		System.out.println(message.getSid());
	}
}
