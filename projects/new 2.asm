	BTFSC 05h,3
			GOTO LED_ON
			GOTO LED_OFF 
			LED_ON BSF 06h,7
			GOTO START
			LED_OFF BCF 06h,7
			

			
			BTFSC 06h,1
			GOTO LED2_ON
			GOTO LED2_OFF 
			LED2_ON BSF 06h,7
			LED2_OFF BCF 06h,7
			GOTO START	
			
				BTFSC 05h,3
			GOTO LED_ON
			LED_ON XORWF 06h,7
					BSF 05h,3
					GOTO LED_OFF
					LED_OFF BTFSS 05h,3
							BCF 06h,7
							GOTO LED_OFF
							GOTO START
					
			BTFSC 06h,1
			GOTO LED2_ON
			LED2_ON XORWF 06h,7
					BSF 06h,1
					GOTO LED2_OFF
					LED2_OFF BTFSS 06h,1
							 BCF 06h,7
							 GOTO LED2_OFF
							 GOTO START