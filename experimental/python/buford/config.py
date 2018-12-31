import configparser
import logging
import os

Config = configparser.ConfigParser()
Config.read(".env")


def config_section_map(section):
    dictionary = {}
    options = Config.options(section)
    for option in options:
        try:
            dictionary[option] = Config.get(section, option)
            if dictionary[option] == -1:
                print("skip: %s" % option)
        except:
            print("exception on %s!" % option)
            dictionary[option] = None
    return dictionary


def set_environment_variables():
    if 'image' in os.environ:
        pass
    else:
        os.environ["POSTGRES_DB"] = config_section_map("database")['dbname']
        os.environ["POSTGRES_USER"] = config_section_map("database")['user']
        os.environ["POSTGRES_HOST"] = config_section_map("database")['host']
        os.environ["POSTGRES_PASSWORD"] = config_section_map("database")['password']
        os.environ["FLASK_LOGGING_FILE"] = config_section_map("logging")['logfile']


def log_request(request):
    logging.basicConfig(filename='app.log',
                        filemode='a',
                        format='%(name)s - %(levelname)s - %(message)s',
                        level=logging.DEBUG)
    logging.debug(f"Request information: ")
    for argument in request.headers:
        logging.debug(f"{argument}")
    logging.debug(f"Request URL: {request.url}")
    logging.debug(f"User agent platform: {request.user_agent.platform}")
