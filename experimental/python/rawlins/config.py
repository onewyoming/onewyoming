import configparser
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
