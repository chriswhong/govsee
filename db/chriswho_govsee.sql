-- phpMyAdmin SQL Dump
-- version 3.4.11.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 17, 2013 at 12:34 PM
-- Server version: 5.5.30
-- PHP Version: 5.2.17

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `chriswho_govsee`
--

-- --------------------------------------------------------

--
-- Table structure for table `boxes`
--

DROP TABLE IF EXISTS `boxes`;
CREATE TABLE IF NOT EXISTS `boxes` (
  `name` char(255) NOT NULL,
  `superiorbox` int(11) NOT NULL,
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `ischief` int(1) NOT NULL DEFAULT '0',
  `gov` char(255) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=146 ;

--
-- Dumping data for table `boxes`
--

INSERT INTO `boxes` (`name`, `superiorbox`, `uid`, `ischief`, `gov`, `description`) VALUES
('Mayor', 0, 1, 0, 'NYC', 'The Mayor of the City of New York is head of the executive branch of New York City''s government. The mayor''s office administers all city services, public property, police and fire protection, most public agencies, and enforces all city and state laws within New York City.\r\nThe budget overseen by the mayor''s office is the largest municipal budget in the United States at $50 billion a year. The city employs 250,000 people, spends about $21 billion to educate more than 1.1 million students, levies $27 billion in taxes, and receives $14 billion from the state and federal governments.\r\nThe mayor''s office is located in New York City Hall; it has jurisdiction over all five boroughs of New York City: Manhattan, Brooklyn, the Bronx, Queens, and Staten Island. The mayor appoints a large number of officials, including commissioners who head city departments, and his or her deputy mayors. According to current law, the mayor is limited to three consecutive four-year terms in office, which was previously limited to two terms. It was changed from two to three terms on October 23, 2008, when the New York City Council voted 29-22 in favor of passing the term limit extension into law.'),
('The Council', 0, 2, 0, 'NYC', ''),
('Borough Presidents', 0, 3, 0, 'NYC', ''),
('Comptroller', 0, 4, 0, 'NYC', ''),
('Public Advocate', 0, 5, 0, 'NYC', ''),
('Deputy Mayor for Government Affairs and Communications', 1, 15, 0, 'NYC', ''),
('Deputy Mayor for Operations', 1, 14, 0, 'NYC', 'The Deputy Mayor for Operations assists the Mayor in managing the Police Department, the Fire Department, the Office of Emergency Management, Office of Management and Budget, and the Office of Labor Relations. The Deputy Mayor directly oversees the Department of Sanitation, the Department of Buildings, the Department of Citywide Administrative Services, the Department of Environmental Protection, the Department of Information Technology and Telecommunications, the Mayor''s Office of Operations, the Office of Long-Term Planning and Sustainability, and the Mayor''s Office of Contract Services. The Deputy Mayor serves as the liaison with the governmental bodies dealing with public finance, procurement, and franchises and concessions.'),
('Department of Education', 1, 13, 0, 'NYC', ''),
('Independent Budget Office', 0, 12, 0, 'NYC', ''),
('District Attorney''s Office', 0, 11, 0, 'NYC', ''),
('Press Secretary', 1, 16, 0, 'NYC', ''),
('First Deputy Mayor', 1, 17, 0, 'NYC', ''),
('Senior Advisor', 1, 18, 0, 'NYC', ''),
('Chief Advisor for Policy and Strategic Planning', 1, 19, 0, 'NYC', ''),
('Deputy Mayor for Economic Development', 1, 20, 0, 'NYC', ''),
('Deputy Mayor for Legal Affairs', 1, 21, 0, 'NYC', ''),
('Deputy mayor for Health and Human Services', 1, 22, 0, 'NYC', ''),
('Department of Buildings', 14, 51, 0, 'NYC', ''),
('Department  of Records and Information Services', 14, 50, 0, 'NYC', ''),
('Office of Environmental Coordination', 14, 49, 0, 'NYC', ''),
('Office of Long Term Planning and Sustainability', 14, 48, 0, 'NYC', ''),
('Office of Contract Services', 14, 47, 0, 'NYC', ''),
('Department of Sanitation', 14, 46, 0, 'NYC', ''),
('Department of Citywide Administrative Services', 14, 45, 0, 'NYC', ''),
('Department of Investigation', 14, 44, 0, 'NYC', ''),
('Law Department', 14, 43, 0, 'NYC', ''),
('Office of Labor Relations', 14, 42, 0, 'NYC', ''),
('Office of Managment and Budget', 14, 41, 0, 'NYC', ''),
('Office of Emergency Management', 14, 40, 0, 'NYC', ''),
('Fire Department', 14, 39, 0, 'NYC', ''),
('Police Department', 14, 38, 0, 'NYC', ''),
('Department of Environmental Protection', 14, 52, 0, 'NYC', ''),
('Office of Operations', 14, 53, 0, 'NYC', ''),
('Department of Information Technology and Telecommunications', 14, 54, 0, 'NYC', ''),
('Office of Environmental Remediation', 14, 55, 0, 'NYC', ''),
('Intergovernmental Affairs', 15, 56, 0, 'NYC', ''),
('City Legislative Affairs', 15, 57, 0, '', ''),
('State Legislative Affairs', 15, 58, 0, 'NYC', ''),
('Federal Affairs', 15, 59, 0, 'NYC', ''),
('Office of Media Research and Analysis', 16, 60, 0, 'NYC', ''),
('Photo Unit', 16, 61, 0, 'NYC', ''),
('Counselor', 17, 62, 0, 'NYC', ''),
('Counselor', 17, 63, 0, 'NYC', ''),
('Department of Parks and Recreation', 17, 64, 0, 'NYC', ''),
('Office of Appointments', 17, 65, 0, 'NYC', ''),
('Department of Consumer Affairs', 17, 66, 0, 'NYC', ''),
('Gracie Mansion', 17, 67, 0, 'NYC', ''),
('Office of Special Projects and Community Events', 17, 68, 0, 'NYC', ''),
('Office of Citywide Events Coordination and Management', 17, 69, 0, 'NYC', ''),
('Public Design Commission', 17, 70, 0, 'NYC', ''),
('Office of Administrative Services', 17, 71, 0, 'NYC', ''),
('Public Design Commission', 17, 72, 0, 'NYC', ''),
('Office of Administrative Services', 17, 73, 0, 'NYC', ''),
('Office of Veterans Affairs', 17, 74, 0, 'NYC', ''),
('Offices of Scheduling and Advance', 17, 75, 0, 'NYC', ''),
('Department of Cultural Affairs', 17, 76, 0, 'NYC', ''),
('Department of Design and Construction', 17, 77, 0, 'NYC', ''),
('Landmarks Preservation Commission', 17, 78, 0, 'NYC', ''),
('Mayor''s Fund to Advance the City of New York', 17, 79, 0, 'NYC', ''),
('Office of Correspondence', 17, 80, 0, 'NYC', ''),
('Commission on the United Nations, the Consular Corps, and Protocol', 17, 81, 0, 'NYC', ''),
('Commission on Women''s Issues', 17, 82, 0, 'NYC', ''),
('Chief Service Officer', 17, 83, 0, 'NYC', ''),
('Community Affairs Unit', 18, 84, 0, 'NYC', ''),
('Office of Criminal Justice Coordinator', 19, 85, 0, 'NYC', ''),
('Office of Special Enforcment', 19, 86, 0, 'NYC', ''),
('Department of Housing Preservation and Development', 20, 87, 0, 'NYC', ''),
('Department of Transportation', 20, 88, 0, 'NYC', ''),
('Economic Development Corporation', 20, 89, 0, 'NYC', ''),
('Department of City Planning', 20, 90, 0, 'NYC', ''),
('New York City Housing Authority', 20, 91, 0, 'NYC', ''),
('Department of Small Business Services', 20, 92, 0, 'NYC', ''),
('Department of Finance', 20, 93, 0, 'NYC', ''),
('Taxi and Limousine Commission', 20, 94, 0, 'NYC', ''),
('Business Integrity Commission', 20, 95, 0, 'NYC', ''),
('Office of Media and Entertainment', 20, 96, 0, 'NYC', ''),
('Administrative Justice Coordinator', 21, 97, 0, 'NYC', ''),
('Office of Administrative Trials and Hearing', 21, 98, 0, 'NYC', ''),
('Office to Combat Domestic Violence', 21, 99, 0, 'NYC', ''),
('Mayor''s Judiciary Committee', 21, 100, 0, 'NYC', ''),
('Office for People with Disabilities', 21, 101, 0, 'NYC', ''),
('Office of Immigrant Affairs', 21, 102, 0, 'NYC', ''),
('Commission on Human Rights', 21, 103, 0, 'NYC', ''),
('Environmental Control Board', 21, 104, 0, 'NYC', ''),
('Department for the Aging', 22, 105, 0, 'NYC', ''),
('Administration for Children''s Services', 22, 106, 0, 'NYC', ''),
('Family Services Coordinator', 22, 107, 0, 'NYC', ''),
('Department of Health and Mental Hygiene', 22, 108, 0, 'NYC', ''),
('Health and Hospitals Corporation', 22, 109, 0, 'NYC', ''),
('Human Resources Adminsitration', 22, 110, 0, 'NYC', ''),
('Department of Social Services', 22, 111, 0, 'NYC', ''),
('Department of Homeless Services', 22, 112, 0, 'NYC', ''),
('Department of Correction', 22, 113, 0, 'NYC', ''),
('Department of Probation', 22, 114, 0, 'NYC', ''),
('Center for Economic Opportunity', 22, 115, 0, 'NYC', ''),
('Office of Food Policy', 22, 116, 0, 'NYC', ''),
('Coordinator of Fatherhood Initiatives', 22, 117, 0, 'NYC', ''),
('Department of Youth and Community Development', 13, 118, 0, 'NYC', ''),
('Office of Payroll Administration', 4, 119, 0, 'NYC', ''),
('Financial Information Services Agency', 4, 120, 0, 'NYC', ''),
('Procurement Policy Board', 4, 121, 0, 'NYC', ''),
('Manhattan Borough President', 3, 122, 0, '', ''),
('Brooklyn Borough President', 3, 123, 0, '', ''),
('Queens Borough President', 3, 124, 0, '', ''),
('Staten Island Borough President', 3, 125, 0, '', ''),
('Bronx Borough President', 3, 126, 0, '', ''),
('City Clerk & Clerk of the Council', 2, 127, 0, 'NYC', ''),
('Manhattan Council Members', 2, 128, 0, '', ''),
('Brooklyn Council Members', 2, 129, 0, 'NYC', ''),
('Queens Council Members', 2, 130, 0, '', ''),
('Bronx Council Members', 2, 131, 0, '', ''),
('Staten Island Council Members', 2, 132, 0, '', ''),
('Office of the Special Narcotics Prosecutor', 11, 133, 0, '', ''),
('Commissioner', 46, 134, 1, 'NYC', ''),
('Executive Assistant to the Commissioner', 46, 135, 0, '', ''),
('Environmental Enforcement Unit', 135, 136, 0, '', ''),
('Permit & Inspection Unit', 135, 137, 0, '', ''),
('First Deputy Commissioner', 46, 138, 0, '', ''),
('Director,EEO', 46, 139, 0, '', 'The mission of the Equal Employment Opportunity Office (EEO) is to ensure that the Department complies with the Citywide Equal Employment Opportunity Policy and adheres to the requirements of federal, state, and local anti-discrimination laws.'),
('Deputy Commissioner for Long Term Export', 146, 140, 0, '', 'The Bureau of Long Term Export is responsible to develop DSNY long-term export facilities and the City''s Comprehensive Solid Waste Management Plan for the 2006 -2025 planning period (SWMP) and supporting Final Environmental Impact Statement (FEIS). The SWMP 1) provides for the management of all solid waste (including recyclables) that is generated in the City and collected by DSNY and other city agencies and the private sector, 2) meets the requirements of the State Environmental Conservation Law and 3) is supported by an FEIS.'),
('Deputy Commissioner, Legal', 46, 141, 0, '', 'The Bureau of Legal Affairs and General Counsel is the Department''s in-house legal department. It provides legal counsel, advice, and assistance to the other Bureaus in connection with procuring and managing contracts, drafting and enforcing statutes and regulations, regulating solid waste transfer stations, and working with other government departments and agencies. The Bureau also serves as the Department''s liaison with the City Council and State Legislature, manages the Department''s City Environmental Quality Review processes, coordinates the Department''s responses to Freedom of Information Law requests for documents, and provides litigation support to the City''s Law Department in connection with lawsuits involving the Department. Finally, the Bureau provides legal counsel on employment and personnel matters, and is the Department''s advisor on the legal aspects of environmental compliance efforts.\r\n\r\nIn the coming years, the closure of Fresh Kills and consequent waste reduction, recycling, and export will generate a great variety of legal work. The Bureau of Legal Affairs and General Counsel anticipates working with the rest of the Department and other City agencies on this major project.'),
('Deputy Commissioner, Financial Management & Administration', 46, 142, 0, '', 'The mission of the Bureau of Financial Management and Administration is to develop, monitor, report and control the Department''s financial plan; provide and ensure adequate controls over the use of financial and human resources; analyze and recommend strategies to improve the Department''s financial position by reducing costs or raising revenues; use technology to provide more and better information and improve customer service; and provide other necessary support services which assist the other Bureaus in fulfilling their missions.'),
('Deputy Commissioner, Public Information & Community Affairs', 46, 143, 0, '', 'The Bureau of Public Information and Community Affairs is responsible for communicating the Department''s policies and procedures and services, both internally and externally. The Bureau manages and monitors the general public''s opinions of the Department''s performance and assists with public policy development. The Bureau also coordinates all DSNY special events, ceremonies and community outreach programs.'),
('Deputy Commissioner, Support Services', 46, 144, 0, '', 'Support Services is composed of two separate Bureaus, the Bureau of Motor Equipment and the Bureau of Building Maintenance. The Bureau of Motor Equipment is responsible for all phases of fleet management, including drafting specifications, procurement, research, and development of new technology, clean air initiatives, maintenance and repair. The Bureau of Building Management is responsible for both routine maintenance and emergency repairs required for Department office buildings, repair facilities and garages.'),
('Chief Engineer', 46, 145, 0, '', 'The Bureau of Engineering provides engineering support services to maintain the Department''s infrastructure and implement the Department''s capital construction program related to the design and construction of garages, section stations, borough repair shops and personnel facilities.');

-- --------------------------------------------------------

--
-- Table structure for table `people`
--

DROP TABLE IF EXISTS `people`;
CREATE TABLE IF NOT EXISTS `people` (
  `firstname` tinytext NOT NULL,
  `lastname` tinytext NOT NULL,
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `currpos` int(11) NOT NULL,
  `image` char(128) NOT NULL,
  `description` text NOT NULL,
  UNIQUE KEY `uid` (`uid`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `people`
--

INSERT INTO `people` (`firstname`, `lastname`, `uid`, `currpos`, `image`, `description`) VALUES
('Michael', 'Bloomberg', 1, 1, 'bloomberg.jpg', 'Michael Rubens Bloomberg (born February 14, 1942) is an American business magnate, politician and philanthropist. He is currently Mayor of New York City. With a net worth of $25 billion in 2012, he is also the 10th-richest person in the United States.[1] He is the founder and 88% owner of Bloomberg L.P., a financial data-services firm.[2][3][4]\r\nA Democrat before seeking elective office, Bloomberg switched his registration in 2001 and ran for mayor as a Republican, winning the election that year and a second term in 2005. Bloomberg left the Republican Party over policy and philosophical disagreements with national party leadership in 2007. In 2008, Bloomberg campaigned to change the city''s term limits law and ran for his third term in 2009 as an Independent candidate on the Republican ballot line. He was frequently mentioned as a possible Independent candidate for the 2008 presidential election and his departure from the Republican Party fueled further speculation.[5] There was also speculation that he would run as a vice-presidential candidate.[6] Bloomberg did not, however, seek the presidency nor was he selected as a running mate by any of the presidential candidates.'),
('Patricia', 'Harris', 2, 17, '', ''),
('Robert', 'Steel', 4, 20, '', ''),
('Linda', 'Gibbs', 5, 22, '', ''),
('Carol', 'Robles-Roman', 6, 21, '', ''),
('Cas', 'Halloway', 7, 14, 'CasHolloway.png', 'Mayor Michael R. Bloomberg appointed Cas Holloway Deputy Mayor for Operations on August 4, 2011.  As Deputy Mayor, Cas oversees 11 mayoral agencies and offices and assists the Mayor in overseeing the Police Department, Fire Department, Office of Emergency Management, Office of Management and Budget, and the Office of Labor Relations.  From January 1, 2010 until his appointment as Deputy Mayor, Cas served as the Commissioner of the New York City Department of Environmental Protection. To implement PlaNYC the Mayor''s blueprint for a sustainable New York City. Cas appointed DEP''s first Deputy Commissioner for Sustainability, created an energy team to develop the next generation of distributed generation investments, reorganized DEP''s capital projects division, and initiated Water for the Future, a $2 billion package of investments that will repair leaks in the Delaware Aqueduct and ensure the reliability of the City''s water supply for years to come. From 2006 until his appointment at DEP, Cas served as Chief of Staff and Counsel to Deputy Mayor for Operations Edward Skyler and as Special Advisor to Mayor Bloomberg. He graduated cum laude from Harvard College and with honors from the University of Chicago Law School.\r\n'),
('Howard', 'Wolfson', 8, 15, '', ''),
('Shea', 'Fink', 9, 18, '', ''),
('John', 'Feinblatt', 10, 19, '', ''),
('John', 'Doherty', 11, 134, 'doherty.jpg', 'John J. Doherty, a long-time veteran of the Department of Sanitation, returned as the 42nd Commissioner on February 1, 2002.\r\n\r\nCommissioner Doherty, born and raised in Staten Island, is only the fifth person in the Department of Sanitation''s history to rise through the ranks to become Commissioner.\r\n\r\nHe began his career with the Department as a Sanitation Worker in 1960. He quickly advanced himself within the Department to hold key positions such as Assistant Chief of Snow Operations, Chief of Bureau Operations, Director of the Bureau of Cleaning and Collection (the Department''s largest division), Deputy Commissioner for Operations, and First Deputy Commissioner. Prior to his three-year sabbatical, he served as the Department''s 40th Commissioner from 1994 through 1998.\r\n\r\nCommissioner Doherty is a graduate of the Senior Executive Program at Harvard University''s John F. Kennedy School of Government. He also completed New York City''s Top 40, a program that recognized and developed the future leaders of New York City.');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
